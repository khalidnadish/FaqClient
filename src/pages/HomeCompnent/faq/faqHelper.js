import { Accordion } from "@mui/material";
import FaqCrads from "./faqComponent/FaqCards";
import FaqQuastion from "./faqComponent/FaqQuastion";
import { green } from "@mui/material/colors";
export const ShowFaq = ({ faqdata }) => {
  return (
    <>
      {faqdata.map((faqItem, idx) => (
        <Accordion
          key={faqItem.faqid}
          sx={{ marginBottom: "5px", width: "100%" }}
        >
          {/* {console.log("image : " + faqItem.avatar)} */}

          <FaqQuastion
            Quastion={faqItem.faq}
            src={faqItem.avatar}
            count={faqItem.rowcount}
            faqid={faqItem.faqid}
            autherName={faqItem.autherName}
            create_at={faqItem.create_at}
          />
        </Accordion>
      ))}
    </>
  );
};

export const ShowFaqCard = ({ faqdata }) => {
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
          create_at={faqItem.create_at}
        />
      ))}
    </>
  );
};

// style SX Var

export const sx_HiDocumentSearch = {
  bgcolor: green[500],
  color: "white",
  paddingLeft: "10px",
  paddingRight: "10px",
  width: "auto",
};
