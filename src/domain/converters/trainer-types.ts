import { TrainersJsonEdge, TrainersJson } from "../graphql-types";
import { Trainer } from "../models";

export function trainerFromTrainersJsonEdge(edge: TrainersJsonEdge): Trainer {
    const n = edge.node;
    return trainerFromTrainersJson(n);
}

export function trainerFromTrainersJson(s: TrainersJson): Trainer {
    const trainer: Trainer = {
        id: s.id,
        name: s.name,
        title: s.title,
        picture: s.picture,
        bio: s.bio,
        twitter: s.twitter
    };
    return trainer;
}
