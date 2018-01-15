export const jam = (that) => {
	// that = this
	let waktu, jam, menit, detik;
	
	setInterval(function(){
		waktu = new Date();
		jam = waktu.getHours();
		menit = waktu.getMinutes();
		detik = waktu.getSeconds();
		jam = jam >= 10 ? jam : "0"+jam;
		menit = menit >= 10 ? menit : "0"+menit;
		detik = detik >= 10 ? detik : "0"+detik;


		that.setState({
			jam: jam+" : "+menit+" : "+detik
		});
	}, 1000);
}