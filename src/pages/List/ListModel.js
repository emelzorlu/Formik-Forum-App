import axios from "axios";

//veri ile alakalı her türlü yapıyı modelde tanımlarız
//model oluştururken genelde class'ları tercih ederiz
export default class ListModel {

    //api den post verilerini alıp döndüren fonksiyon
    async getPosts() {
        try {
            const res = await axios.get('http://localhost:3000/posts');

            return res.data;
    }   catch (err) {
            alert('Üzgünüz Bir Hata Oluştu.');
            console.log(err);
        }
    }
}
