import ky from 'ky';
export default function rest() {
    return {
        get: ky.get,
        post: ky.post,
        put: ky.put,
        delete: ky.delete,
        patch: ky.patch,
        head: ky.head,
    }
}