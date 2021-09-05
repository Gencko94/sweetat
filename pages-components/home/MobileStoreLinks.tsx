import Flex from "@/components/Flex";

const MobileStoreLinks = () => {
  return (
    <Flex justify="center" items="center">
      <img
        src="/assets/apple-badge-en.png"
        alt="Download on App Store"
        style={{
          width: "150px",
          height: "60px",
        }}
      />

      <img
        src="/assets/google-badge-en.png"
        alt="Download on Google play"
        style={{
          width: "150px",
          height: "60px",
        }}
      />
    </Flex>
  );
};

export default MobileStoreLinks;
