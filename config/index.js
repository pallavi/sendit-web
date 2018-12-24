const DEFAULT = {};

export default {
    ...DEFAULT,
    ...require(`./${process.env.NODE_ENV || 'development'}`)
};