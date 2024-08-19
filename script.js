let currentView = 0; // 0: années/jour/heure/min/sec, 1: heures totales, 2: minutes totales, 3: secondes totales

function calculateTime() {
    const inputDate = document.getElementById('dateInput').value;
    const result = document.getElementById('result');

    if (!inputDate) {
        alert("Veuillez sélectionner une date.");
        return;
    }

    const targetDate = new Date(inputDate);
    const now = new Date();

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            result.innerHTML = `<div class="time-part" id="yearsPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Années</span>
                                </div>
                                <div class="time-part" id="daysPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Jours</span>
                                </div>
                                <div class="time-part" id="hoursPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Heures</span>
                                </div>
                                <div class="time-part" id="minutesPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Minutes</span>
                                </div>
                                <div class="time-part" id="secondsPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Secondes</span>
                                </div>
                                <div class="time-part" id="totalHoursPart" style="display:${currentView === 1 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Heures Totales</span>
                                </div>
                                <div class="time-part" id="totalMinutesPart" style="display:${currentView === 2 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Minutes Totales</span>
                                </div>
                                <div class="time-part" id="totalSecondsPart" style="display:${currentView === 3 ? 'flex' : 'none'};">
                                    <span class="number">00</span>
                                    <span class="label">Secondes Totales</span>
                                </div>`;
            return;
        }

        const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const totalHours = years * 365 * 24 + days * 24 + hours;
        const totalMinutes = totalHours * 60 + minutes;
        const totalSeconds = totalMinutes * 60 + seconds;

        result.innerHTML = `<div class="time-part" id="yearsPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                <span class="number">${years.toString().padStart(2, '0')}</span>
                                <span class="label">Années</span>
                            </div>
                            <div class="time-part" id="daysPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                <span class="number">${days.toString().padStart(2, '0')}</span>
                                <span class="label">Jours</span>
                            </div>
                            <div class="time-part" id="hoursPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                <span class="number">${hours.toString().padStart(2, '0')}</span>
                                <span class="label">Heures</span>
                            </div>
                            <div class="time-part" id="minutesPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                <span class="number">${minutes.toString().padStart(2, '0')}</span>
                                <span class="label">Minutes</span>
                            </div>
                            <div class="time-part" id="secondsPart" style="display:${currentView === 0 ? 'flex' : 'none'};">
                                <span class="number">${seconds.toString().padStart(2, '0')}</span>
                                <span class="label">Secondes</span>
                            </div>
                            <div class="time-part" id="totalHoursPart" style="display:${currentView === 1 ? 'flex' : 'none'};">
                                <span class="number">${totalHours.toString().padStart(2, '0')}</span>
                                <span class="label">Heures Totales</span>
                            </div>
                            <div class="time-part" id="totalMinutesPart" style="display:${currentView === 2 ? 'flex' : 'none'};">
                                <span class="number">${totalMinutes.toString().padStart(2, '0')}</span>
                                <span class="label">Minutes Totales</span>
                            </div>
                            <div class="time-part" id="totalSecondsPart" style="display:${currentView === 3 ? 'flex' : 'none'};">
                                <span class="number">${totalSeconds.toString().padStart(2, '0')}</span>
                                <span class="label">Secondes Totales</span>
                            </div>`;

        if (timeDifference > 0) {
            setTimeout(updateCountdown, 1000);
        }
    }

    function updateVisiblePart() {
        document.getElementById('yearsPart').style.display = (currentView === 0) ? 'flex' : 'none';
        document.getElementById('daysPart').style.display = (currentView === 0) ? 'flex' : 'none';
        document.getElementById('hoursPart').style.display = (currentView === 0) ? 'flex' : 'none';
        document.getElementById('minutesPart').style.display = (currentView === 0) ? 'flex' : 'none';
        document.getElementById('secondsPart').style.display = (currentView === 0) ? 'flex' : 'none';
        document.getElementById('totalHoursPart').style.display = (currentView === 1) ? 'flex' : 'none';
        document.getElementById('totalMinutesPart').style.display = (currentView === 2) ? 'flex' : 'none';
        document.getElementById('totalSecondsPart').style.display = (currentView === 3) ? 'flex' : 'none';
    }

    function showPrev() {
        if (currentView > 0) {
            currentView--;
            updateVisiblePart();
        }
    }

    function showNext() {
        if (currentView < 3) {
            currentView++;
            updateVisiblePart();
        }
    }

    document.getElementById('prev').addEventListener('click', showPrev);
    document.getElementById('next').addEventListener('click', showNext);

    updateCountdown();
    updateVisiblePart();
}