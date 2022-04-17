type UserType = {
    name: string;
    nickname: string;
    phone: string;
    email: string;
    profileImage: string;
};

let User: UserType = {
    name: "아무개",
    nickname: "Amugae2232",
    phone: "01000000000",
    email: "amugae1101@gmail.com",
    profileImage: "string",
};

export async function get(): Promise<UserType> {
    return User;
}

export async function update(user: UserType): Promise<UserType> {
    User = { ...User, ...user };
    return User;
}
