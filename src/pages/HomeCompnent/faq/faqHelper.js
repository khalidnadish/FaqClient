import FaqCrads from "./faqComponent/FaqCards";
import Nofaq from "../faq/faqComponent/NoFaqCards";

export const sx_HiDocumentSearch = {
  // bgcolor: green[500],
  color: "primary.main",
  paddingLeft: "10px",
  paddingRight: "10px",
  width: "auto",
};
export const ShowFaqCard = ({ faqdata }) => {
  console.log("test:" + typeof faqdata);
  if (faqdata.length === 0) {
    return <Nofaq />;
  }
  return (
    <>
      {faqdata.map((faqItem, idx) => (
        <FaqCrads
          key={faqItem.faqid}
          Quastion={faqItem.faq}
          src={faqItem.avatar}
          count={faqItem.rowcount}
          faqid={faqItem.faqid}
          autherName={faqItem.autherName}
          faqGroup={faqItem.catName}
          create_at={faqItem.create_at}
        />
      ))}
    </>
  );
};
