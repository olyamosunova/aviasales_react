export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

export const formatDuration = (duration) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
};
