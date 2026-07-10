// ==========================================
// SKYMET - GÉNÉRATEUR DE METAR V1.1.0
// ==========================================

// ---------- RÉCUPÉRATION DES DONNÉES STOCKÉES ----------
function getStoredMetarData() {
    return {
        ts: SkyMetStore.get('TS'),
        th: SkyMetStore.get('TH'),
        td: SkyMetStore.get('TD'),
        uu: SkyMetStore.get('UU'),
        tw: SkyMetStore.get('TW'),
        pression: SkyMetStore.get('PRESSION'),
        qfe: SkyMetStore.get('QFE'),
        qnh: SkyMetStore.get('QNH'),
        inhg: SkyMetStore.get('INHG'),
        diff_ts_th: SkyMetStore.get('DIFF_TS_TH'),
        diff_t_td: SkyMetStore.get('DIFF_T_TD'),
        tendance: SkyMetStore.get('TENDANCE'),
        timestamp: SkyMetStore.get('TIMESTAMP'),
        timestamp_qfe: SkyMetStore.get('TIMESTAMP_QFE')
    };
}

// ---------- GÉNÉRATION DU TAF ----------
function genererTAF(metarData) {
    // Récupérer les données
    const icao = metarData.icao || 'FZAA';
    const datetime = metarData.datetime || new Date().toISOString().slice(2, 12).replace(/-/g, '').replace(/T/g, '') + 'Z';
    const vent = metarData.vent || '21008KT';
    const visibilite = metarData.visibilite || '8000';
    const nuages = metarData.nuages || 'SCT015CB BKN030';
    const temperature = metarData.temperature || 28;
    const qnh = metarData.qnh || 1013;
    const tendance = metarData.tendance || 'NOSIG';
    
    // Heures de prévision (périodes)
    const now = new Date();
    const heureActuelle = now.getHours();
    const heurePrevision = (heureActuelle + 2) % 24;
    const heurePrevision2 = (heureActuelle + 6) % 24;
    const heurePrevision3 = (heureActuelle + 12) % 24;
    
    const pad = (n) => String(n).padStart(2, '0');
    
    // Utiliser la tendance sélectionnée
    const tendanceCode = tendance === 'NOSIG' ? 'NOSIG' : tendance;
    
    // Construction du TAF
    const tafParts = [
        'TAF',
        icao,
        datetime,
        `${pad(heureActuelle)}${pad(heureActuelle + 2)}/${pad(heurePrevision)}${pad(heurePrevision + 2)}Z`,
        `${vent}`,
        `${visibilite}`,
        `${nuages}`,
        `Q${Math.round(qnh)}`,
        `T${Math.round(temperature)}/${Math.round(metarData.pointRosee || 20)}`,
        tendanceCode
    ];
    
    // Ajouter des périodes de prévision
    const tafComplet = [
        tafParts.join(' '),
        `BECMG ${pad(heurePrevision)}${pad(heurePrevision + 2)}Z ${vent} ${visibilite} SCT020 BKN040`,
        `TEMPO ${pad(heurePrevision2)}${pad(heurePrevision2 + 2)}Z 4000 TSRA FEW015CB`,
        `BECMG ${pad(heurePrevision3)}${pad(heurePrevision3 + 2)}Z CAVOK`
    ];
    
    return tafComplet.join(' ');
}

// ---------- PRÉ-REMPLISSAGE DU FORMULAIRE ----------
function remplirFormulaireMetar() {
    const data = getStoredMetarData();
    
    const tempInput = document.getElementById('metar-temperature');
    const tdInput = document.getElementById('metar-point-rosee');
    const qnhInput = document.getElementById('metar-qnh');
    const qfeInput = document.getElementById('metar-qfe');
    const tendanceInput = document.getElementById('metar-tendance');
    const icaoInput = document.getElementById('metar-icao');
    const datetimeInput = document.getElementById('metar-datetime');
    const ventInput = document.getElementById('metar-vent');
    const visibiliteInput = document.getElementById('metar-visibilite');
    const nuagesInput = document.getElementById('metar-nuages');
    
    const now = new Date();
    const dateStr = now.toISOString().slice(2, 12).replace(/-/g, '').replace(/T/g, '') + 'Z';
    
    // Pré-remplir les champs avec les données stockées
    if (tempInput) tempInput.value = data.ts ? Math.round(parseFloat(data.ts)) : '';
    if (tdInput) tdInput.value = data.td ? Math.round(parseFloat(data.td)) : '';
    if (qnhInput) qnhInput.value = data.qnh ? Math.round(parseFloat(data.qnh)) : '';
    if (qfeInput) qfeInput.value = data.qfe || '';
    
    // 🔥 CORRECTION : S'assurer que la tendance est définie correctement
    if (tendanceInput) {
        const tendanceValue = data.tendance || 'NOSIG';
        // Vérifier si l'option existe
        const optionExists = Array.from(tendanceInput.options).some(opt => opt.value === tendanceValue);
        tendanceInput.value = optionExists ? tendanceValue : 'NOSIG';
    }
    
    if (icaoInput) icaoInput.value = 'FZAA';
    if (datetimeInput) datetimeInput.value = dateStr;
    if (ventInput) ventInput.value = '21008KT';
    if (visibiliteInput) visibiliteInput.value = '8000';
    if (nuagesInput) nuagesInput.value = 'SCT015CB BKN030';
    
    const select = document.getElementById('metar-phenomenes');
    if (select) select.value = 'CAVOK';
    
    // ⚠️ IMPORTANT : Le TAF RESTE VIDE - pas de génération automatique
    const tafOutput = document.getElementById('taf-output');
    if (tafOutput) {
        tafOutput.innerHTML = `<span class="text-sm text-slate-500">⏳ En attente de génération...</span>`;
    }
    
    console.log('✅ Formulaire METAR pré-rempli :', data);
}

// ---------- GÉNÉRATION DU METAR ----------
function genererMETAR() {
    const icao = document.getElementById('metar-icao')?.value || 'FZAA';
    const datetime = document.getElementById('metar-datetime')?.value || new Date().toISOString().slice(2, 12).replace(/-/g, '').replace(/T/g, '') + 'Z';
    const vent = document.getElementById('metar-vent')?.value || '21008KT';
    const visibilite = document.getElementById('metar-visibilite')?.value || '8000';
    const phenomenes = document.getElementById('metar-phenomenes')?.value || 'CAVOK';
    const nuages = document.getElementById('metar-nuages')?.value || 'SCT015CB BKN030';
    const temperature = document.getElementById('metar-temperature')?.value || '28';
    const pointRosee = document.getElementById('metar-point-rosee')?.value || '24';
    const qnh = document.getElementById('metar-qnh')?.value || '1013';
    const qfe = document.getElementById('metar-qfe')?.value || '1001';
    const tendance = document.getElementById('metar-tendance')?.value || 'NOSIG';
    
    const data = getStoredMetarData();
    
    // Gestion de la visibilité : si > 6000m, on ne signale rien
    let visibiliteFinale = visibilite;
    let phenomenesFinal = phenomenes;
    
    // Si la visibilité est bonne (> 6000m), on ne signale pas les phénomènes
    const visibiliteNum = parseFloat(visibilite);
    if (visibiliteNum > 6000) {
        phenomenesFinal = ''; // Pas de phénomène à signaler
    }
    
    // 🔥 SUPPRESSION DU MESSAGE DE VISIBILITÉ - On ne l'affiche plus
    // const messageVisibilite = visibiliteNum > 6000 ? ' (Visibilité bonne - aucun phénomène signalé)' : '';
    
    // Construction du METAR
    const metarParts = [
        icao,
        datetime,
        vent,
        visibiliteFinale,
        phenomenesFinal || 'CAVOK', // Si pas de phénomènes, on met CAVOK
        nuages,
        `${Math.round(parseFloat(temperature))}/${Math.round(parseFloat(pointRosee))}`,
        `Q${Math.round(parseFloat(qnh))}`,
        tendance === 'NOSIG' ? 'NOSIG' : tendance
    ];
    
    // Nettoyer les parties vides
    const metarPartsFiltres = metarParts.filter(part => part && part.trim() !== '');
    const metarFinal = metarPartsFiltres.join(' ') + '=';
    
    // ✅ Construction du TAF
    const metarData = {
        icao: icao,
        datetime: datetime,
        vent: vent,
        visibilite: visibiliteFinale,
        phenomenes: phenomenesFinal || 'CAVOK',
        nuages: nuages,
        temperature: Math.round(parseFloat(temperature)),
        pointRosee: Math.round(parseFloat(pointRosee)),
        qnh: Math.round(parseFloat(qnh)),
        tendance: tendance
    };
    const tafFinal = genererTAF(metarData);
    
    // 🔥 Afficher le METAR SANS le message de visibilité
    const output = document.getElementById('metar-output');
    if (output) {
        output.innerHTML = `<span class="text-green-400 font-mono">${metarFinal}</span>`;
    }
    
    // ✅ Afficher le TAF
    const tafOutput = document.getElementById('taf-output');
    if (tafOutput) {
        tafOutput.innerHTML = `<span class="text-amber-400 font-mono text-sm">${tafFinal}</span>`;
    }
    
    // Ajouter à l'historique
    ajouterHistoriqueMetar(metarFinal, data);
    
    // === ENVOYER VERS LE TABLEAU DE BORD ===
    const dashboardData = {
        metar: metarFinal,
        taf: tafFinal,
        icao: icao,
        datetime: datetime,
        vent: vent,
        visibilite: visibiliteFinale,
        phenomenes: phenomenesFinal || 'CAVOK',
        nuages: nuages,
        temperature: Math.round(parseFloat(temperature)),
        pointRosee: Math.round(parseFloat(pointRosee)),
        qnh: Math.round(parseFloat(qnh)),
        qfe: qfe || data.qfe || '1001',
        tendance: tendance || 'NOSIG',
        uu: data.uu || '--',
        ts: data.ts || temperature,
        td: data.td || pointRosee,
        timestamp: new Date().toISOString()
    };
    
    try {
        localStorage.setItem('skymet_dashboard_data', JSON.stringify(dashboardData));
        console.log('✅ Données envoyées au dashboard :', dashboardData);
    } catch(e) {
        console.warn('⚠️ Erreur stockage dashboard:', e);
    }
    
    // Afficher le bouton "Afficher au tableau de bord"
    afficherBoutonDashboard();
    
    if (typeof showToast === 'function') {
        showToast('✅ METAR et TAF générés avec succès !', 'success', 3000);
    }
}

// ---------- AFFICHER LE BOUTON DASHBOARD ----------
function afficherBoutonDashboard() {
    const container = document.getElementById('metar-output');
    if (!container) return;
    
    const oldBtn = document.getElementById('btn-dashboard-metar');
    if (oldBtn) oldBtn.remove();
    
    const btn = document.createElement('button');
    btn.id = 'btn-dashboard-metar';
    btn.className = 'mt-3 w-full px-4 py-2.5 text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg shadow-green-600/30 transition-all flex items-center justify-center gap-2';
    btn.innerHTML = `
        <span class="material-symbols-outlined text-sm">dashboard</span>
        Afficher au tableau de bord
    `;
    btn.addEventListener('click', function() {
        window.location.href = 'dashboard_operation.html';
    });
    
    container.parentNode.insertBefore(btn, container.nextSibling);
}

// ---------- HISTORIQUE METAR ----------
function ajouterHistoriqueMetar(metar, data) {
    const container = document.getElementById('metar-historique');
    if (!container) return;
    
    const emptyMsg = container.querySelector('.text-center');
    if (emptyMsg) emptyMsg.remove();
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center text-sm group cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors border-t border-slate-200 dark:border-slate-800 pt-3';
    li.innerHTML = `
        <span class="font-mono text-slate-700 dark:text-slate-300">${metar.slice(0, 30)}...</span>
        <span class="text-slate-400 group-hover:text-primary">${timeStr}</span>
    `;
    li.addEventListener('click', function() {
        const output = document.getElementById('metar-output');
        if (output) {
            output.innerHTML = `<span class="text-green-400 font-mono">${metar}</span>`;
        }
        afficherBoutonDashboard();
    });
    
    container.prepend(li);
    while (container.children.length > 10) {
        container.removeChild(container.lastChild);
    }
}

// ---------- RÉINITIALISATION ----------
function reinitialiserMetar() {
    const fields = ['metar-icao', 'metar-datetime', 'metar-vent', 'metar-visibilite', 
                   'metar-nuages', 'metar-temperature', 'metar-point-rosee', 
                   'metar-qnh', 'metar-qfe'];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    const selectPhenomenes = document.getElementById('metar-phenomenes');
    if (selectPhenomenes) selectPhenomenes.value = 'CAVOK';  // 🔥 Changé de '' à 'CAVOK'
    
    const selectTendance = document.getElementById('metar-tendance');
    if (selectTendance) selectTendance.value = 'NOSIG';
    
    const output = document.getElementById('metar-output');
    if (output) {
        output.innerHTML = '<span class="text-sm text-slate-400">⏳ En attente de génération...</span>';
    }
    
    const tafOutput = document.getElementById('taf-output');
    if (tafOutput) {
        tafOutput.innerHTML = '<span class="text-sm text-slate-500">⏳ En attente de génération...</span>';
    }
    
    const btnDash = document.getElementById('btn-dashboard-metar');
    if (btnDash) btnDash.remove();
    
    if (typeof showToast === 'function') {
        showToast('🔄 Formulaire réinitialisé', 'info', 2000);
    }
}

// ---------- INITIALISATION ----------
document.addEventListener('DOMContentLoaded', function() {
    // Pré-remplir le formulaire MAIS PAS le TAF
    setTimeout(() => { remplirFormulaireMetar(); }, 300);
    
    // Bouton Générer METAR
    const btnGenerer = document.getElementById('btn-generer-metar');
    if (btnGenerer) {
        btnGenerer.addEventListener('click', function(e) {
            e.preventDefault();
            genererMETAR();
        });
    }
    
    // Bouton Réinitialiser
    const btnReset = document.getElementById('btn-reset-metar');
    if (btnReset) {
        btnReset.addEventListener('click', function(e) {
            e.preventDefault();
            reinitialiserMetar();
        });
    }
    
    // Bouton Copier METAR
    const btnCopier = document.getElementById('btn-copier-metar');
    if (btnCopier) {
        btnCopier.addEventListener('click', function() {
            const output = document.getElementById('metar-output');
            if (!output) return;
            const metarText = output.textContent.trim();
            if (metarText === '⏳ En attente de génération...' || !metarText) {
                if (typeof showToast === 'function') {
                    showToast('⚠️ Aucun METAR à copier', 'warning', 2000);
                }
                return;
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(metarText).then(() => {
                    if (typeof showToast === 'function') {
                        showToast('📋 METAR copié !', 'success', 2000);
                    }
                });
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = metarText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                if (typeof showToast === 'function') {
                    showToast('📋 METAR copié !', 'success', 2000);
                }
            }
        });
    }
    
    // Bouton Copier TAF
    const btnCopierTAF = document.getElementById('btn-copier-taf');
    if (btnCopierTAF) {
        btnCopierTAF.addEventListener('click', function() {
            const tafOutput = document.getElementById('taf-output');
            if (!tafOutput) return;
            const tafText = tafOutput.textContent.trim();
            if (tafText === '⏳ En attente de génération...' || !tafText) {
                if (typeof showToast === 'function') {
                    showToast('⚠️ Aucun TAF à copier', 'warning', 2000);
                }
                return;
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(tafText).then(() => {
                    if (typeof showToast === 'function') {
                        showToast('📋 TAF copié !', 'success', 2000);
                    }
                });
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = tafText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                if (typeof showToast === 'function') {
                    showToast('📋 TAF copié !', 'success', 2000);
                }
            }
        });
    }
    
    const data = getStoredMetarData();
    if (data.ts || data.qnh) {
        console.log('🛩️ Données récupérées :', data);
    }
});

console.log('✅ METAR Generator chargé avec succès !');