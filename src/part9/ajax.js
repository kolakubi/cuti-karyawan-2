import $ from 'jquery';

export function getDataKarakter(state, that){
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'http://localhost:80/react/part9/api.php',
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
				karakter: data
			})
			console.log(data);
		},
		error: function(xhr, status, err){
			console.log(status);
			console.log(err);
		}
	})
}