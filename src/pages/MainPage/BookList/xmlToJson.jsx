import { xml2js } from 'xml-js';

/**
 * XML 문자열을 JSON 객체로 변환하는 함수
 * @param {string} xml - XML 문자열
 * @returns {Object} - JSON 객체
 */
const xmlToJson = (xml) => {
    const options = {
        compact: true, // compact 모드 사용 (단순한 JSON 구조)
        ignoreDeclaration: true, // XML 선언 무시
        ignoreAttributes: true, // 속성 무시
        ignoreComment: true, // 주석 무시
    };
    return JSON.parse(xml2js(xml, options));
};

export default xmlToJson;
