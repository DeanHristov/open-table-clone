jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: "",
            asPath: "",
            back: jest.fn(),
            push: jest.fn(),
        };
    },
}));

// export the mocked instance above
module.exports = jest.requireMock("next/router");
