Button colors:

```js
import { Button } from 'react-tailwind-ui';

(
  <div className="flex">
    <div className="mr-2">
      <Button>
          Default
        </Button>
    </div>

    <div className="mr-2">
      <Button color="primary">
        Primary
      </Button>
    </div>

    <div className="mr-2">
      <Button color="secondary">
        Secondary
      </Button>
    </div>

    <div className="mr-2">
      <Button color="success">
        Success
      </Button>
    </div>

    <div className="mr-2">
      <Button color="warning">
        Warning
      </Button>
    </div>

    <div className="mr-2">
      <Button color="alert">
        Alert
      </Button>
    </div>
  </div>
)
```

Button disabled:

```js
import { Button } from 'react-tailwind-ui';

(
  <div className="flex">
    <div className="mr-2">
      <Button disabled>
          Default
        </Button>
    </div>

    <div className="mr-2">
      <Button color="primary" disabled>
        Primary
      </Button>
    </div>

    <div className="mr-2">
      <Button color="secondary" disabled>
        Secondary
      </Button>
    </div>

    <div className="mr-2">
      <Button color="success" disabled>
        Success
      </Button>
    </div>

    <div className="mr-2">
      <Button color="warning" disabled>
        Warning
      </Button>
    </div>

    <div className="mr-2">
      <Button color="alert" disabled>
        Alert
      </Button>
    </div>
  </div>
)
```