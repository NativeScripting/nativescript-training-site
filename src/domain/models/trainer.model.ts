export interface Trainer {
    id: string;
    name: string;
    title: string;
    picture: string;
    bio: string;
    twitter: string;
}


export function getTrainerByTrainerId(trainerId: string, trainers: Trainer[]): Trainer {
    return trainers.find(c => c.id === trainerId);
}
