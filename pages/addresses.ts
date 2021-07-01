const resolveAddress = (environmentVariableName: string): string => {
    const address = process.env[environmentVariableName];
    if (!address) {
        throw new Error(`The ${environmentVariableName} environment variable is required`);
    }
    return `${window.location.protocol}//${address}`;
};

const kgiAddress = resolveAddress("NEXT_PUBLIC_KGI_ADDRESS");

export {
    kgiAddress,
};