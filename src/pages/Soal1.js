import {useEffect, useState} from 'react'

const App = () => {
  const [kelipatan, setKelipatan] = useState([]);
  const [fibonaci, setFibonaci] = useState([0,1]);
  const [star, setStar] = useState([]);
  const [terbilang, setTerbilang] = useState();
  

  useEffect(()=>{
    kelipatanReturn();
    fibonaciValue();
  },[]);
  const kelipatanReturn = () => {
    for(let i=50; i <=100; i+=5){
      setKelipatan(kelipatan => [...kelipatan, i]);
    }
  }
  const fibonaciValue = () => {
    for(let i=1; i < 20; i++){
      setFibonaci(fibonaci => [...fibonaci, fibonaci[i]+fibonaci[i-1]]);
    }
  }
  const valueKelipatan = (value) => {
    if(value <= 60){
      return "KURANG";
    }else if(value > 60 && value <=70){
      return "CUKUP";
    }if(value > 70 && value <=80){
      return "BAIK";
    }else{
      return "LUAR BIASA";
    }
  }
  const printX = (e) => {
    setStar([]);
    for(let i = 1; i <= e; i++){
      setStar(star => [...star, "*".repeat(i)]);
    }
  }
  const huruf = (angka) => {
    let huruf;
    switch (parseInt(angka)) {
      case 1:
        huruf = "Satu";
        break;
      case 2:
        huruf = "Dua";
        break;
      case 3:
        huruf = "Tiga";
        break;
      case 4:
        huruf = "Empat";
        break;
      case 5:
        huruf = "Lima";
        break;
      case 6:
        huruf = "Enam";
        break;
      case 7:
        huruf = "Tujuh";
        break;
      case 8:
        huruf = "Delapan";
        break;
      case 9:
        huruf = "Sembilan";
    }
    return huruf;
  }
  const belasan = (angka) => {
    let huruf;
    switch (angka) {
      case 1:
        huruf = "Sebelas";
        break;
      case 2:
        huruf = "Dua Belas";
        break;
      case 3:
        huruf = "Tiga Belas";
        break;
      case 4:
        huruf = "Empat Belas";
        break;
      case 5:
        huruf = "Lima Belas";
        break;
      case 6:
        huruf = "Enam Belas";
        break;
      case 7:
        huruf = "Tujuh Belas";
        break;
      case 8:
        huruf = "Delapan Belas";
        break;
      case 9:
        huruf = "Sembilan Belas";
    }
    return huruf;
  }
  const showTerbilang = (e) => {
    if(e.length !== 4){
      setTerbilang("masukkan 4 digit angka");
    }else{
      const array = e.split("");
      let pertama, kedua, ketiga, keempat;
      if(parseInt(array[0]) !== 0){
        if(parseInt(array[0]) !== 1){
          pertama = huruf(array[0])+" Ribu ";
        }else{
          pertama = "Seribu ";
        }
      }
      else{
        pertama = "";
      }
      if(parseInt(array[1]) !== 0){
        if(parseInt(array[1]) !== 1){
          kedua = huruf(array[1])+" Ratus ";
        }else{
          kedua = "Seratus ";
        }
      }
      else{
        kedua = "";
      }
      if(parseInt(array[3]) !== 0){
        keempat = huruf(array[3])
      }
      else{
        keempat = "";
      }
      if(parseInt(array[2]) !== 0){
        if(parseInt(array[2]) !== 1){
          ketiga = huruf(array[2])+" Puluh ";
        }else{
          if(parseInt(array[3]) === 0){
            ketiga = "Sepuluh ";
          }else{
            ketiga = belasan(parseInt(array[3]));
            keempat = "";
          }
        }
      }
      else{
        ketiga = "";
      }
      setTerbilang(pertama+kedua+ketiga+keempat);
    }
  }
  
  return (
    <>
      <div>
          <h5>PseudoCode : TES KEMAMPUAN PROGRAMMING</h5>
          Soal No 1
          {kelipatan.map((item, index) => (
            <div key={index}>{item} => {valueKelipatan(item)}</div>
          ))}
          <p>Soal No 2</p>
          {fibonaci.map((item, index) => (
            <a key={index}>{item} </a>
          ))}
          <p>Soal No 3</p>
          <input type="number" onChange={(e)=>printX(e.target.value)}/>
          {star.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <p>Soal No 4</p>
          <input type="number" onChange={(e)=>showTerbilang(e.target.value)}/>
          <div>{terbilang}</div>
      </div>
    </>
    
  )
}

export default App