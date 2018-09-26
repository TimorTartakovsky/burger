import ApplicationMessages from "../messages/ApplicationMessages";

export const BURGER_INGREDIENTS_CONST = {
    breadBottom: 'bread-bottom',
    breadTop: 'bread-top',
    meat: 'meat',
    cheese: 'cheese',
    salad: 'salad',
    bacon: 'bacon',
};

export const BUILDER_CONTROLS = [
    {label: 'Salad', type: BURGER_INGREDIENTS_CONST.salad},
    {label: 'Bacon', type: BURGER_INGREDIENTS_CONST.bacon},
    {label: 'Cheese', type: BURGER_INGREDIENTS_CONST.cheese},
    {label: 'Meat', type: BURGER_INGREDIENTS_CONST.meat},
];

export const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

export const BTN_TYPES = {
    success: 'success',
    danger: 'danger',
};

export const inputTypes = {
    input: 'input',
    textArea: 'textarea',
    select: 'select',
}

export const defaultConfigurationData = {
    fullName: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.fullNamePlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    country: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.countryPlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    city: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.cityPlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.streetPlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    apt: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.aptPlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    floor: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.floorPlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    elevator: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.elevatorPlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    zipCode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.zipCodePlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ApplicationMessages.contactDataComponent.form.emailPlaceholder
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
    deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'fastest', displayValue: 'Fastest'},
                { value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
    },
}



