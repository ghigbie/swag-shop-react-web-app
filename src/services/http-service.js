import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        let promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product')
            .then(response => {
                console.log(response.json());
            })
        });
        return promise;
    }
}

export default HttpService;