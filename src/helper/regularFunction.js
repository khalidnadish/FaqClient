export const getCurrentTime = () => {
  var today = new Date();
  var time = new Date();

  let crntTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return crntTime;
};
