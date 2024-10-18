import TranslationForm from "@/components/TranslationForm";
import { auth } from "@clerk/nextjs/server";

export type TranslationLanguages = {
  translation: {
    [key: string]: {
      name: string;
      nativeName: string;
      dir: "ltr" | "rtl";
    };
  };
};

const TranslatePage = async () => {
  auth().protect();

  const { userId } = auth();
  if (!userId) throw new Error("User not logged in");

  const languagesEndpoint =
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";

  const response = await fetch(languagesEndpoint, {
    next: {
      // Cache results for 24 hours, then refresh
      revalidate: 60 * 60 * 24,
    },
  });

  const languages = (await response.json()) as TranslationLanguages;

  return (
    <div className="px-10 xl:px-0 mb-20">
      <TranslationForm languages={languages} />

      {/* Translation history */}
    </div>
  );
};

export default TranslatePage;
