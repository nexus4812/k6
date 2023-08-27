import http from 'k6/http';
import {check} from 'k6';

export default function () {
    const res = http.get('http://localhost:9502/foo');
    check(res, {'success': r => r.status === 200})
}
