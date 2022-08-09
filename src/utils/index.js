import moment from 'moment';

export const formatDate = (date) => {
    return moment(date).format("ddd, MMMM Do");
};
export const formatTileDate = (date) => {
    return moment(date).format("MMM D, YYYY");
}
export const formatTime = (time) => {
    return moment(time).format("hh:mm A");
};
export const getAge = (date) => {
    return moment(date).toNow(true);
}
export const formatGender = (gender) => {
    return gender.charAt(0).toUpperCase() + gender.slice(1);
}