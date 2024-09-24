interface TestResult {
    title: string;
    totalScore: number;
    percentage: number;
    textResult: string;
}

interface GlobalType {
    global: {
        data: {
            attributes: {
                logo: {
                    data: {
                        attributes: {
                            url: string;
                            alternativeText: string;
                        }
                    }
                };
                nav: Link[];
                social: {
                    href: string;
                    image: {
                        data: {
                            attributes: {
                                url: string;
                                alternativeText: string;
                            }
                        }
                    }
                }[];
            }
        }
    }
}

interface Link {
    id: string;
    href: string;
    name: string;
    authRequire: boolean;
}