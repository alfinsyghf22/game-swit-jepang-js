var tanya = true;
while ( tanya == true){
	// menangkap pilihan player
	var p = prompt('pilih: gunting, batu, kertas');
	// mmenagkap pilihan komputer
	// menagkap bilangan random
	var comp = Math.random();

	if( comp < 0.34) {
		comp = 'gunting';
	} else if( comp >= 0.34 && comp < 0.67 ) {
		comp = 'batu';
	} else {
		comp = 'kertas';
	}
	console.log(comp);

	var hasil = '';
	// menentukan rules
	if( p === comp ){
		hasil = 'SERI!';
	} else if( p === 'gunting') {
		//if( comp == 'kertas') {
		//	hasil = 'MENANG';
		//} else {
		//	hasil = 'KALAH';
		//}
		hasil = ( comp == 'kertas') ? 'MENANG' : 'KALAH';
	}else if( p == 'batu' ) {
		hasil = ( comp == 'kertas') ? 'KALAH' : 'MENANG';
	}else if( p == 'kertas'){
		hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG';
	}else {
		hasil = 'memasukan pilihan yang salah';
	}
	alert('Kamu memilih :  ' + p + ' dan komputer memilih :  ' + comp +  ' \Maka hasilnya: Kamu ' + hasil);

	tanya = confirm('lagi?');
}

alert('Terima Kasih Sudah Bermain')