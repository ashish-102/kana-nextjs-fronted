export enum VehicleType {
    DEFAULT = "",
    OPEN = "open",
    CLOSE = "close",
}

export enum FileTypes {
    Image = "image",
    Pdf = "pdf",
    Audio = "audio",
    Video = "video",
    Other = "other",
}

export type Testimonial = {
    id: string;
    name: string;
    imgSrc: string;
    pdfSrc?: string;
    videoSrc?: string;
};

export enum VehicleStatus {
    DEFAULT = "",
    IN_PROGRESS = "IN_PROGRESS",
    IN_COMPLETE = "IN_COMPLETE",
    COMPLETED = "COMPLETED",
}

export type VehicleData = {
    id: string;
    model: string;
    name: string;
    number: string;
    address: string;
    vehicle_type: VehicleType.DEFAULT;
    vehicle_number: string;
    capacity: number;
    status: VehicleStatus;
};