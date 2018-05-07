function guardian() {
  return {
    key: process.env.GUARDIAN_KEY,
  };
};

function aylien() {
  return {
    applicationId: process.env.AYLIEN_APPLICATION_ID,
    key: process.env.AYLIEN_APPLICATION_KEY
  };
};

module.exports = {
  guardian: guardian,
  aylien: aylien
}
