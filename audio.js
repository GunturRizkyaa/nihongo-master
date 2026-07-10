function speakJapanese(text){

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "ja-JP";
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = speechSynthesis.getVoices();

    const jpVoice = voices.find(v => v.lang.startsWith("ja"));

    if(jpVoice){
        utterance.voice = jpVoice;
    }

    speechSynthesis.speak(utterance);

}