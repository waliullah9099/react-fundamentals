import UserAvatar from "../components/UserAvatar";
import withBorder from "../components/withBorder";

const GameResult = () => {
  const UserWithBorder = withBorder(UserAvatar);
  return (
    <div className="flex gap-2">
      <UserAvatar
        imageUrl={
          "https://images.generated.photos/9StRZRD_5oqR5eIW2o6LJxd7K9SuZTBC2c2aKmnuBxI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE4MTIyLmpwZw.jpg"
        }
      />
      <UserWithBorder />
      <UserWithBorder
        imageUrl={
          "https://images.generated.photos/9StRZRD_5oqR5eIW2o6LJxd7K9SuZTBC2c2aKmnuBxI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE4MTIyLmpwZw.jpg"
        }
      />
      <UserAvatar
        imageUrl={
          "https://images.generated.photos/9StRZRD_5oqR5eIW2o6LJxd7K9SuZTBC2c2aKmnuBxI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE4MTIyLmpwZw.jpg"
        }
      />
      <UserAvatar
        imageUrl={
          "https://images.generated.photos/9StRZRD_5oqR5eIW2o6LJxd7K9SuZTBC2c2aKmnuBxI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE4MTIyLmpwZw.jpg"
        }
      />
    </div>
  );
};

export default GameResult;
