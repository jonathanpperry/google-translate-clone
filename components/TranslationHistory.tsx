import { ITranslation } from "@/mongodb/models/User";
import { auth } from "@clerk/nextjs/server";

const TranslationHistory = async () => {
  const { userId } = auth();

  const url = `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.VERCEL_URL
  }/translationHistory?userId=${userId}`;

  const response = await fetch(url, {
    next: {
      tags: ["translationHistory"],
    },
  });

  const { translations }: { translations: Array<ITranslation> } =
    await response.json();

  console.log(translations);

  return <div>TranslationHistory</div>;
};
export default TranslationHistory;
