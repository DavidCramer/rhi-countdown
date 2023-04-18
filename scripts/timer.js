'use strict';

const TimerApp = {
	remaining: 0,
	clock: document.getElementById( 'app' ),
	clockH: document.getElementById( 'hours' ),
	clockM: document.getElementById( 'minutes' ),
	clockS: document.getElementById( 'seconds' ),
	init() {
		const now = new Date();
		setInterval( () => {
			this.checkTimer();
		}, 1000 );
	},
	checkTimer() {
		const time1 = new Date();
		const time1ms = time1.getTime( time1 );
		const time2 = new Date( 2023, 3, 21, 15, 30 );
		const time2ms = time2.getTime( time2 );

		const difference = time2ms - time1ms;
		var hours = Math.floor(difference / 36e5),
			minutes = Math.floor(difference % 36e5 / 60000),
			seconds = Math.floor(difference % 60000 / 1000);
		//const lapse = new Date( difference );
		//const startHours = ( time2.getDay() - time1.getDay() ) * 24;
		//this.clock.innerHTML = startHours;
		this.clockH.innerHTML = `${hours}`;
		this.clockM.innerHTML = `${minutes}`;
		this.clockS.innerHTML = `${seconds}`;
		//this.clock.innerHTML =  lapse.getMinutes() + ':' + lapse.getSeconds();
	}

};

window.addEventListener( 'load', () => {
	TimerApp.init();
} );
