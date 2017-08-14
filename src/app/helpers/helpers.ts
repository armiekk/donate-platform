export class Helpers {

    static MapFieldsConditionToQueryUri<T>(condition: T = <T>{}) {
        let keyConditionList: string[] = Object.keys(condition);
        let queryUri: string = '';
        if (keyConditionList.length) {
            for (let key of keyConditionList) {
                queryUri = `${queryUri}[${key}]=${condition[key]}`;
            }
        }
        return queryUri;
    }

    static MapWhereConditionToQueryUri(condition: { where: any }) {
        return JSON.stringify(condition);
    }

}