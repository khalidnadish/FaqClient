import FaqCrads from "./faqComponent/FaqCards";

export const sx_HiDocumentSearch = {
  // bgcolor: green[500],
  color: "primary.main",
  paddingLeft: "10px",
  paddingRight: "10px",
  width: "auto",
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
          faqGroup={faqItem.catName}
          create_at={faqItem.create_at}
        />
      ))}
    </>
  );
};
// export const ShowFaq = ({ faqdata }) => {
//   return (
//     <>
//       {faqdata.map((faqItem, idx) => (
//         <Accordion
//           key={faqItem.faqid}
//           sx={{ marginBottom: "5px", width: "100%" }}
//         >
//           {/* {console.log("image : " + faqItem.avatar)} */}

//           <FaqQuastion
//             Quastion={faqItem.faq}
//             src={faqItem.avatar}
//             count={faqItem.rowcount}
//             faqid={faqItem.faqid}
//             autherName={faqItem.autherName}
//             faqGroup={faqItem.catName}
//             create_at={faqItem.create_at}
//           />
//         </Accordion>
//       ))}
//     </>
//   );
// };

// style SX Var
