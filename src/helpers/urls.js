const API_ROOT = "http://localhost:800";
const APIUrls = {
    list: () => `${API_ROOT}/blog/list`,
    save: () => `${API_ROOT}/blog/save`,
    blog: (blogID) => `${API_ROOT}/blog/${blogID}`
};
export default APIUrls;
