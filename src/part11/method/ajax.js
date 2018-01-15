import $ from 'jquery';

export const getData = (that) => {
	// that = this
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
			
		},
		error: function(xhr, status, err){
			console.log(status);
			console.log(err);
		}
	})
}

export const login = (that, dataLogin, url, state) => {
	// data login = {nik: 1, password: 'admin'}
	// that = this
	// url = 'http://localhost:80/react/part10/login.php'

	// bikin promise biar datanya ditungguin
	return new Promise(function(resolve, reject){
		$.ajax({
			url: url,
			method: 'POST',
			data: dataLogin,
			dataType: 'text',
			beforeSend: function(xhr){
				if(xhr.overrideMimeType){
					xhr.overrideMimeType('application/json'); // untuk menghilangkan peringatan 'not-well-formed'pada firefox jika menggunakan JSON
				}
			},
			success: function(data){
				//console.log(data);
				// return sukses atau gagal
				
				resolve(data);
			},
			error: function(xhr, status, error){
				console.log(status);
				console.log(error)
			}
		});
	})
	
}