import React, { useState } from 'react' 

function KisiEkle() {

    const [list, setlist] = useState([]);
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [age, setage] = useState();
    const [email, setemail] = useState("");
    const [comment,setcomment] = useState("");
    const [id,setid] =useState(0); //başlangınçta hiç kullanıcı bilgisi olmadığı için sıfır verildi /// id kullanılmazsa ne olur ne faydası var
    const [mode, setmode]=useState("add");

    function Ekle(){
      if (name && surname && age && email && comment) 
      {
        setid(id+1); // ilk kullanıcı ve dahasonra eklenecek kullanıcılar hep 1 artacağı için id+1 denildi
        setlist([...list, {id:id,name:name,surname:surname,age:age,email:email,comment:comment}]); // liste oluşturmadan yapılabilir mi ?

        setname("");
        setsurname("");
        setage("");
        setemail("");
        setcomment("");
      }
    };


    function Sil(id){
      const updatelist=list.filter((x) => x.id !== id );
      setlist(updatelist);
    };

    function Duzenle (i){

      setname(i.name);
      setsurname(i.surname);
      setage(i.age);
      setemail(i.email);
      setcomment(i.comment);
      setid(i.id);
      setmode("edit-" + i.id)
      
    }

    function Guncelle() {

      const updatedList = list.map((item) =>
        item.id === id ? {id:id,name:name,surname:surname,age:age,email:email,comment:comment}: item
      );
      setlist(updatedList);
      setmode("add"); 
      setname("");
      setsurname("");
      setage("");
      setemail("");
      setcomment("");
    }



  return (
    <div>
       <div className="container m-5">
        <div className="row">

          
          <div className="col-4 backgr">
          <div className="col-12 text-align-center">
          <h3 className="mt-4 ml-5 ml-5">Kullanıcı Bilgileri</h3>
            </div>
          
            <div className="col-12">
            <input className='form-control' type="text" placeholder='İsminizi Giriniz' id="name" name="name"  minLength="0" maxLength="30" onChange={(a)=> setname(a.target.value)} value={name}/>
            </div>
            <div className="col-12">
            <input className='form-control' type="text" placeholder='Soyisminizi Giriniz' id="surName" name="surname"  minLength="0" maxLength="30" onChange={(a) => setsurname(a.target.value)} value={surname}/>
            </div>
            <div className="col-12">
            <input className='form-control' type="number" placeholder="Yaşınızı Giriniz" id="age" name="age"  minLength="0" maxLength="150" onChange={(a) => setage(a.target.value)} value={age}/>
            </div>
            <div className="col-12">
            <input className='form-control' type="email" placeholder='E-mail Adresinizi Giriniz' id="email" name="emaile"  minLength="0" maxLength="100" onChange={(a) => setemail(a.target.value)} value={email}/>
            </div>
            <div className="col-12"> 
            <textarea className='form-control' name="comment" placeholder='Bize Yorum Yazın' id="comment" cols="30" rows="10" onChange={(a) => setcomment(a.target.value)} value={comment}></textarea>
            {mode==="add" ? (
            <button  type="button" className="btn btn-success form-control mb-5" onClick={Ekle} >Ekle</button> ):
            (  <button className="btn btn-primary form-control mb-5" onClick={Guncelle}>
            Güncelle
          </button>)}
            </div>
          </div>
          <div className="col-1"></div>

          <div className="col-7 backgr2 justify-content-center">

          <h3 className="mt-4 ml-5">Listeye Eklenenler</h3>

          <div className="info">
           
            <ul>

          {list.map((listelenen,index) => (   
            <div className="backgr3">
            <li key={index}>  
            <strong>Ad:</strong> {listelenen.name}
            </li>
            <li>
            <strong>Soyad:</strong> {listelenen.surname}
            </li>
            <li>
            <strong>Yaş:</strong> {listelenen.age}
            </li>
            <li>
            <strong>Email:</strong> {listelenen.email}
            </li>
            <li>
            <strong>Yorum:</strong> {listelenen.comment}
            </li>
            <li>
                    <button
                      type="button"
                      className="btn btn-danger form-control"
                      onClick={(id) => Sil(listelenen.id)} // onclick={sil(listelenen.id)} ??
                    >
                      Sil
                    </button>

                    <button
                      type="button"
                      className="btn btn-warning form-control"
                      onClick={(i) => Duzenle(listelenen)}
                    >
                      Duzenle
                    </button>
            </li>
            </div>
          ))}
        </ul>

        </div>
      </div>
        </div>
       </div>

    </div>
  );
}

export default KisiEkle








