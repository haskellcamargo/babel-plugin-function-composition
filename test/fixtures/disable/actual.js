const something = () => {
    const add2 = x => x + 2;
    const mul5 = x => x * 5;

    const transform = add2 & mul5;
    return () => {
        'no composition';

        const retransform = add2 & mul5;
    };
};
