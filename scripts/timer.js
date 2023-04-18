'use strict';

const TimerApp = {
	remaining: 0,
	clock: document.getElementById( 'app' ),
	clockH: document.getElementById( 'hours' ),
	clockM: document.getElementById( 'minutes' ),
	clockS: document.getElementById( 'seconds' ),
	tick: false,
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
		const hours = Math.floor( difference / 36e5 );
		const minutes = Math.floor( difference % 36e5 / 60000 );
		const seconds = Math.floor( difference % 60000 / 1000 );

		this.clockH.innerHTML = `${ 10 > hours ? '0' : '' }${ hours }`;
		this.clockM.innerHTML = `${ 10 > minutes ? '0' : '' }${ minutes }`;
		this.clockS.innerHTML = `${ 10 > seconds ? '0' : '' }${ seconds }`;

	}

};

window.addEventListener( 'load', () => {
	TimerApp.init();
} );
