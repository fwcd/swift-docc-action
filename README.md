# Swift DocC Action

[![Dist](https://github.com/fwcd/swift-docc-action/actions/workflows/dist.yml/badge.svg)](https://github.com/fwcd/swift-docc-action/actions/workflows/dist.yml)

Generates documentation for a Swift package using the [`swift-docc-plugin`](https://github.com/apple/swift-docc-plugin).

## Usage

To use, make sure that your package includes a dependency on the plugin in your `Package.swift`:

```swift
.package(url: "https://github.com/apple/swift-docc-plugin.git", from: "1.0.0"),
```

Then include the action in your workflow (make sure that a Swift 5.6+ toolchain is on your PATH, on macOS this should be given, but on Linux you may need to first install it e.g. using [`setup-swift`](https://github.com/fwal/setup-swift)):

```yaml
- uses: fwcd/swift-docc-action@v1
  with:
    target: YourTarget
    output: ./docs
    hosting-base-path: yourproject
    disable-indexing: 'true'
    transform-for-static-hosting: 'true'
```

The generated documentation will be in the `./docs` folder. If you wish to host your docs on GitHub Pages, check out [this tutorial from the official docs](https://apple.github.io/swift-docc-plugin/documentation/swiftdoccplugin/publishing-to-github-pages/). An example of a workflow that deploys directly to GitHub Pages [can be found here](https://github.com/fwcd/lighthouse-swift/blob/e9f345f1d936c917e520449e379c9c0f00cccbb2/.github/workflows/docs.yml).
