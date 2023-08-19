import { Paragraph } from "@/app/components/Paragraph";
import { getAge, getCountry, getGender } from "./api";
import { Params } from "./paramsType";
import "./page.scss";




export default async function Page({params}: Params) {
    const ageData = getAge(params.name);
    const genderData = getGender(params.name);
    const countryData = getCountry(params.name);
    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
    return (
      <div className="personal-card">
        <div>Personal informations</div>
        <Paragraph text="Name" value={params.name}></Paragraph>
        <Paragraph text="Age" value={age.age}></Paragraph>
        <Paragraph text="Gender" value={gender?.gender}></Paragraph>
        <Paragraph text="Country" value={country?.country[0].country_id}></Paragraph>
      </div>
    );
  }
  