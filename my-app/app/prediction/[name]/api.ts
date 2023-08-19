

export const getAge = async (name: string) => {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    return response.json();
};

export const getGender = async (name: string) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    return response.json();
};

export const getCountry = async (name: string) => {
    const response = await fetch(`https://api.nationalize.io/?name=${name}`);
    return response.json();
};