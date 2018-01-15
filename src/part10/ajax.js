import $ from 'jquery';

export function getDataKarakter(state, that){
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'http://localhost:80/react/part10/getDataKaryawan.php',
// 		xhrFields: {
			// withCredentials: false
// 		},
		beforeSend: function(xhr){
		    if (xhr.overrideMimeType){
			    xhr.overrideMimeType("application/json"); // untuk menghilangkan peringatan 'not-well-formed'pada firefox jika menggunakan JSON
  			}
  		},
		success: function(data){
			that.setState({
				karyawan: data
			})
			console.log(data);
		},
		error: function(xhr, status, err){
			console.log(status);
			console.log(err);
		}
	})
}

export function login(state, that, dataLogin){
	$.ajax({
		url: 'http://localhost:80/react/part10/login.php',
		method: 'POST',
		data: dataLogin,
		dataType: 'text',
		beforeSend: function(xhr){
			if(xhr.overrideMimeType){
				xhr.overrideMimeType('application/json'); // untuk menghilangkan peringatan 'not-well-formed'pada firefox jika menggunakan JSON
			}
		},
		success: function(data){
			console.log(data);
			if(data==="sukses"){

			}
		},
		error: function(xhr, status, error){
			console.log(status);
			console.log(error)
		}
	})
}

export function jam(that){
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