export interface Post {
    id?: number;
    name?: string;
    description?: string;
    donateTotal?: number;
    donateTarget?: number;
    postType?: number;
    createBy?: string;
    createDate?: Date;
    updateDate?: Date;
    customerId?: number;
    skip?: number;
    limit?: number;
    count?: number;
}