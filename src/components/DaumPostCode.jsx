import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const AddressSearch = ({ showAddress, onFinish }) => {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");

  const handleComplete = (data) => {
    let addr = ""; // 주소 변수
    let extraAddr = ""; // 참고항목 변수

    if (data.userSelectedType === "R") {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }

    if (data.userSelectedType === "R") {
      if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
        extraAddr += data.bname;
      }

      if (data.buildingName !== "" && data.apartment === "Y") {
        extraAddr +=
          extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
      }

      if (extraAddr !== "") {
        extraAddr = " (" + extraAddr + ")";
      }
    }

    const adress = addr + extraAddr + data.zonecode;
    onFinish(adress);
  };

  //   const handleAddressSearch = () => {
  //     setShowAddress(true);
  //   };

  return (
    <div>
      {/* <input type="button" onClick={handleAddressSearch} value="주소 찾기" /> */}

      {showAddress && (
        <div>
          <DaumPostcode
            onComplete={handleComplete}
            autoClose={true} // 선택 완료 후 자동으로 닫기
            width={"100%"}
            height={"100%"}
            style={{
              display: "block",
              border: "1px solid",
              maxWidth: "400px",
              height: "300px",
              margin: "5px 0",
              position: "relative",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AddressSearch;
