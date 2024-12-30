import axios from 'axios';

class DbService {

    private _firebase_databaseURL: String | any = process.env.REACT_FIREBASE_databaseURL;

    private _get_LoginUpdate: String = '';

    public constructor() { }

    public async validateLogin(): Promise<any> {
        const response = await axios.post(this._firebase_databaseURL + "/");
        return response.data;
    }

}
export default DbService;

