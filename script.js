// ===============================
// Nihongo Master
// script.js
// ===============================

// Jalankan saat halaman selesai dimuat
window.onload = function () {

    // Halaman Hiragana
    if (document.getElementById("hiraganaGrid")) {
        loadHiragana();
    }

    // Halaman Katakana
    if (document.getElementById("katakanaGrid")) {
        loadKatakana();
    }

    // Halaman Detail
    if (document.getElementById("kana")) {
        loadKanaDetail();
    }

};

// =====================================
// HIRAGANA
// =====================================

function loadHiragana() {

    const grid = document.getElementById("hiraganaGrid");

    if (!grid) return;

    grid.innerHTML = "";

    hiragana.forEach(item => {

        grid.innerHTML += `
            <div class="kana" onclick="openKana('hiragana','${item.id}')">

                <span class="jp">${item.kana}</span>

                <span class="romaji">${item.romaji}</span>

            </div>
        `;

    });

}

// =====================================
// KATAKANA
// =====================================

function loadKatakana() {

    const grid = document.getElementById("katakanaGrid");

    if (!grid) return;

    grid.innerHTML = "";

    katakana.forEach(item => {

        grid.innerHTML += `
            <div class="kana" onclick="openKana('katakana','${item.id}')">

                <span class="jp">${item.kana}</span>

                <span class="romaji">${item.romaji}</span>

            </div>
        `;

    });

}

// =====================================
// SEARCH HIRAGANA
// =====================================

function searchKana() {

    const keyword = document
        .getElementById("searchKana")
        .value
        .toLowerCase();

    const grid = document.getElementById("hiraganaGrid");

    if (!grid) return;

    grid.innerHTML = "";

    hiragana
        .filter(item =>
            item.kana.includes(keyword) ||
            item.romaji.toLowerCase().includes(keyword))
        .forEach(item => {

            grid.innerHTML += `
                <div class="kana" onclick="openKana('hiragana','${item.id}')">

                    <span class="jp">${item.kana}</span>

                    <span class="romaji">${item.romaji}</span>

                </div>
            `;

        });

}

// =====================================
// SEARCH KATAKANA
// =====================================

function searchKatakana() {

    const keyword = document
        .getElementById("searchKatakana")
        .value
        .toLowerCase();

    const grid = document.getElementById("katakanaGrid");

    if (!grid) return;

    grid.innerHTML = "";

    katakana
        .filter(item =>
            item.kana.includes(keyword) ||
            item.romaji.toLowerCase().includes(keyword))
        .forEach(item => {

            grid.innerHTML += `
                <div class="kana" onclick="openKana('katakana','${item.id}')">

                    <span class="jp">${item.kana}</span>

                    <span class="romaji">${item.romaji}</span>

                </div>
            `;

        });

}

// =====================================
// BUKA DETAIL
// =====================================

function openKana(type, id) {

    window.location.href = `kana.html?type=${type}&id=${id}`;

}

// =====================================
// DETAIL HURUF
// =====================================

function loadKanaDetail() {

    const params = new URLSearchParams(window.location.search);

    const type = params.get("type");

    const id = params.get("id");

    if (!type || !id) return;

    let data = null;

    if (type === "hiragana") {

        data = hiragana.find(item => item.id === id);

    } else if (type === "katakana") {

        data = katakana.find(item => item.id === id);

    }

    if (!data) return;

    document.getElementById("kana").textContent = data.kana;
    document.getElementById("romaji").textContent = data.romaji;
    document.getElementById("arti").textContent = data.arti;

    const contohList = document.getElementById("contohList");

    contohList.innerHTML = "";

    if (data.contoh.length === 0) {

        contohList.innerHTML = `
            <div class="example-card">
                <p>Belum ada contoh kata.</p>
            </div>
        `;

        return;

    }

    data.contoh.forEach(item => {

        contohList.innerHTML += `
            <div class="example-card">

                <h4>${item.jp}</h4>

                <strong>${item.romaji}</strong>

                <p>${item.arti}</p>

            </div>
        `;

    });

}

function speakJapanese(text){

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "ja-JP";

    utterance.rate = 0.8;

    utterance.pitch = 1;

    utterance.volume = 1;

    const voices = speechSynthesis.getVoices();

    const jpVoice = voices.find(v => v.lang === "ja-JP");

    if(jpVoice){
        utterance.voice = jpVoice;
    }

    speechSynthesis.speak(utterance);

}