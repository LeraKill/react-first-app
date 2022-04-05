export const pictures = ['https://images.unsplash.com/photo-1634820889655-00f3e38319ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTA2OTAxMg&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1646404094528-92f946613413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0ODkxODgwMw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1591636687027-a157c53387cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTA2OTA5OA&ixlib=rb-1.2.1&q=80&w=1080'];

export function shuffle(arr) {
	return [...arr].sort(() => Math.random() - 0.5);
}

