const something = () => {
    const add2 = x => x + 2;
    const mul5 = x => x * 5;

    const transform = (...args) => (mul5)((add2)(...args));
    return () => {
        'no composition';

        const retransform = add2 & mul5;
    };
};
