const API_ROOT = "http://localhost:800";
//All the urls are container in a single file for easier and universal access
const APIUrls = {
    list: () => `${API_ROOT}/blog/list`,
    save: () => `${API_ROOT}/blog/save`,
    blog: (blogID) => `${API_ROOT}/blog/${blogID}`
};
export default APIUrls;
