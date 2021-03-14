import axios from "axios";

const baseDomain = 'https://api.twitch.tv';
const baseURL = `${baseDomain}/helix`;
const token = 'phn01j6sc3649ik4tuzrarho1xu2pn';
const clientId = 'gboby20e800eiaw2q36rs9odjdphfm';

export default axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Client-Id': clientId
    }
})